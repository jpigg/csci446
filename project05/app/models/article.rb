class Article < ActiveRecord::Base
	belongs_to :author
	validates :title, :author_name, :body, :creation_date, presence: true
	validates_exclusion_of :author_name, :in => %w( Pat ), :message => "The name Pat is not allowed, Pat broke my heart"
end
