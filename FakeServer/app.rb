# app.rb
require 'sinatra'
require 'sinatra/reloader'
require "sinatra"
require "json"

class MockServerApp < Sinatra::Base
    def fixture_path(relative_path)
        fixtures_dir = File.expand_path("../TestFixtures", __FILE__)
        puts "!!!!\n!!!!Fixture Directory :: #{fixtures_dir}\n!!!!"
        puts "!!!!\n!!!!Fixture Relative path :: #{relative_path}\n!!!!"

        File.join(fixtures_dir, relative_path)
    end
    
    def render_fixture(fixture, responseStatus=200)
        content_type :json
        fixture_file = self.fixture_path(fixture)
        puts '&&'*10
        puts fixture_file
        puts '&&&&'*10

        if File.exists?(fixture_file)
            status responseStatus
            File.read(fixture_file)
            else
            puts "!!!!\n!!!! NO FIXTURE FOUND :: #{fixture_file}\n!!!!"
            body "{}"
            status 404
        end
    end
    
    def render_html(fixture, responseStatus=200)
        content_type :html
        fixture_file = self.fixture_path(fixture)
        if File.exists?(fixture_file)
            status responseStatus
            File.read(fixture_file)
            else
            puts "!!!!\n!!!! NO FIXTURE FOUND :: #{fixture_file}\n!!!!"
            body "{}"
            status 404
        end
    end
end

set :user_name, 'Empty'

before do
    @username = "[]"
end


get "/addresses/Srithar" do
    fixture ="addresses/Srithar/GET.json"
    render_fixture(fixture)
end
end