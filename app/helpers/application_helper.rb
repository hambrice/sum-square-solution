module ApplicationHelper
  def solution(n)
    numbers = (1..n)
    sum_of_squares = numbers.reduce(:+)**2
    square_of_sums = numbers.map {|num| num ** 2}.reduce(:+)
    sum_of_squares - square_of_sums
  end
end
