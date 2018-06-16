
class InputController < ApplicationController
  def index
    n = params["number"].to_i
    numbers = (1..n)
    sum_of_squares = numbers.map {|num| num ** 2}.reduce(:+)
    square_of_sums = numbers.reduce(:+)**2
    render json: square_of_sums - sum_of_squares
  end
end
