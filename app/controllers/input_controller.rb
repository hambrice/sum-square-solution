
class InputController < ApplicationController
  def index
    n = params["number"].to_i
    input = Input.find_by(number: n)
    if input
      input.update(occurrences: input.occurrences += 1, last_datetime: input.datetime, datetime: Time.new)
    else
      input = Input.create(number: n, value: view_context.solution(n), datetime: Time.new)
    end
    render json: input, except: [:id]
  end
end
