
class InputController < ApplicationController
  def index
    n = params["number"].to_i
    input = Input.find_by(number: n)
    if input
      input.update(occurrences: input.occurrences += 1, last_datetime: input.datetime, datetime: Time.new)
    else
      numbers = (1..n)
      solution = numbers.reduce(:+)**2 - numbers.map {|num| num ** 2}.reduce(:+)
      input = Input.create(number: n, value: solution, datetime: Time.new)
    end
    render json: input
  end
end
