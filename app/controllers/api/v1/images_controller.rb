module Api::V1
  class ImagesController < ApplicationApiController
    def index
      puts "api at work"
      if params[:page]
        response = {status: "sending pages.."}
        #todo: parse csv file.
        #puts File.read("test.txt")
      else
        response = {status: "sending all images.."}
      end
      render json: response
    end
  end
end
