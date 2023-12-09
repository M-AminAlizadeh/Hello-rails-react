module Api
  class MessagesController < ApplicationController
    def random_greeting
      greetings = %w[سلام Hi Hola こんにちは Ciao]
      render json: { greeting: greetings.sample }
    end
  end
end
