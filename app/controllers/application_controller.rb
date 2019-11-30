class ApplicationController < ActionController::Base
  def home
    render plain: "this is home. Add front-end here"
  end
end
