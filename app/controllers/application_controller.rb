class ApplicationController < ActionController::Base
  def home
    render plain: "this is home"
  end
end
