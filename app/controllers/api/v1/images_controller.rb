module Api::V1
  class ImagesController < ApplicationApiController
    def index
      #Create an array of objects to be return with the format {url: image_url}
      imagesArray = File.readlines("public/images.csv").map { |line| {url: line.chop} }

      #Handle pages if request includes ?page=page_number.
      if params[:page]
        if params[:page] == '1'
          resultsArray = imagesArray[0..19]
        elsif params[:page] == '2'
          resultsArray =  imagesArray[20..39]
        elsif params[:page] == '3'
          resultsArray =  imagesArray[40..49]
        else
          resultsArray = "no images"
        end
      else
        #Return all images if request does not include ?page
        resultsArray = imagesArray
      end

      render json: {results: resultsArray.length, images: resultsArray}
    end
  end
end
