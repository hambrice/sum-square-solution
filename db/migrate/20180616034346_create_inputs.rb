class CreateInputs < ActiveRecord::Migration[5.1]
  def change
    create_table :inputs do |t|
      t.datetime :datetime
      t.integer :value
      t.integer :number
      t.integer :occurrences
      t.datetime :last_datetime

      t.timestamps
    end
  end
end
