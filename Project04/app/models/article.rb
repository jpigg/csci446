class Article < ActiveRecord::Base
	validates :title, :author_name, :body, presence: true
	validates_exclusion_of :author_name, :in => %w( Pat ), :message => "The name Pat is not allowed, Pat broke my heart"
end
