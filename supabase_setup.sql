-- Monastery360 Supabase Database Setup
-- Run this in the Supabase SQL Editor after creating your project

-- Profiles table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  email text not null,
  created_at timestamptz default now()
);

-- Bookings table
create table public.bookings (
  id bigint generated always as identity primary key,
  user_id uuid references public.profiles on delete cascade not null,
  type text not null, -- 'hotel', 'flight', 'train', 'bus'
  title text not null,
  price text,
  dates text,
  status text default 'Confirmed',
  created_at timestamptz default now()
);

-- Visit history
create table public.visits (
  id bigint generated always as identity primary key,
  user_id uuid references public.profiles on delete cascade not null,
  monastery_name text not null,
  monastery_id text not null,
  monastery_img text,
  visited_at timestamptz default now(),
  unique(user_id, monastery_id)
);

-- Saved trip plans
create table public.plans (
  id bigint generated always as identity primary key,
  user_id uuid references public.profiles on delete cascade not null,
  name text not null,
  stops text[] not null,
  pace text not null,
  estimated_cost numeric,
  created_at timestamptz default now()
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.bookings enable row level security;
alter table public.visits enable row level security;
alter table public.plans enable row level security;

-- Users can only access their own data
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

create policy "Users can manage own bookings" on public.bookings for all using (auth.uid() = user_id);
create policy "Users can manage own visits" on public.visits for all using (auth.uid() = user_id);
create policy "Users can manage own plans" on public.plans for all using (auth.uid() = user_id);

-- Auto-create profile on signup (trigger)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, email)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', 'User'), new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
