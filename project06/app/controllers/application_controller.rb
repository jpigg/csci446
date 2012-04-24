class ApplicationController < ActionController::Base
	helper :all #includes all helpers, all the time
	protect_from_forgery
	#filter_parameter_logging :password
	helper_method :current_user_session, :current_user
	
	private
	
	def current_user_session
		return @current_user_session if defined?(@current_user_session)
		@current_user_session = UserSession.find
		return @current_user_session
	end
	
	def current_user
		return @current_user if defined?(@current_user)
		@current_user = current_user_session && current_user_session.record
		return @current_user
	end
	
	def require_user
		unless current_user
			#store_location
			flash[:notice] = "You must be logged in to access this page"
			redirect_to root_url
			return false
		end
	end
end
