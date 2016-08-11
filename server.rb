require 'sinatra'
require 'date'

get '/' do
  erb :home
end

get '/ceremony' do
  erb :ceremony
end

get '/reception' do
  erb :reception
end

get '/accomodations' do
  erb :accomodations
end

get '/wedding_party' do
  erb :wedding_party
end

get '/about_us' do
  erb :about_us
end

get '/registry' do
  erb :registry
end
