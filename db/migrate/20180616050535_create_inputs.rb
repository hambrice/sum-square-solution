class CreateInputs < ActiveRecord::Migration[5.1]
  def change
    create_table :inputs do |t|
      t.datetime :datetime
      t.integer :value
      t.integer :number
      t.integer :occurrences, default: 1
      t.datetime :last_datetime
    end
  end
end
