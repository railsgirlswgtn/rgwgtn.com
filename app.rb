require 'sinatra'
require 'haml'

class App < Sinatra::Base

  configure do

  end

  get '/' do
    haml :index
  end

  helpers do

  end
  
end