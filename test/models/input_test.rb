require 'test_helper'

class InputTest < ActiveSupport::TestCase
  test "creates a new input" do
    input = Input.create
    assert_instance_of(Input, input)
  end

  test "initializes with correct data" do

    input = Input.create(value: 2, number: 4, occurrences: 1)
    assert_equal(2, input.value)
    assert_equal(4, input.number)
    assert_equal(1, input.occurrences)

  end
end
