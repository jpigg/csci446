class Author < ActiveRecord::Base
	has_many :articles
	has_attached_file :photo
end
