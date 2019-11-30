module Api::V1
  class ImagesController < ApplicationApiController
    def index
      puts "api at work"
      if params[:page]
        response = {status: "sending pages.."}
      else
        response = {status: "sending all images.."}
      end

      imagesArray = File.readlines("public/images.csv").map { |line| {url: line.chop} }
      if params[:page]
        if params[:page] == '1'
          resultsArray = imagesArray[0..24]
        elsif params[:page] == '2'
          resultsArray =  imagesArray[25..49]
        else
          resultsArray = "no images"
        end
      else
        resultsArray = imagesArray
      end

      render json: {results: resultsArray.length, images: resultsArray}
    end
  end
end
