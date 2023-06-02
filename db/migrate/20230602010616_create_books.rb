class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :year
      t.string :author
      t.string :description
      t.string :poster_url
      t.string :category

      t.timestamps
    end
  end
end
