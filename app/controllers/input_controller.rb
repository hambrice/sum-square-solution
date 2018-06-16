
class InputController < ApplicationController
  def index
    testing = {first: 1, second: 3}
    render json: testing
  end
end
