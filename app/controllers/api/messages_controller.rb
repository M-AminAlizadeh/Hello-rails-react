module Api
  class MessagesController < ApplicationController
    def random_greeting
      greetings = ["سلام", "Hi", "Hola", "こんにちは", "Ciao"]
      render json: { greeting: greetings.sample }
    end
  end
end
