module Api::V1
  class ImagesController < ApplicationApiController
    def index
      #Create an array of objects to be returned with the format {url: image_url}
      imagesArray = File.readlines("public/images.csv").map { |line| {url: line.chop} }

      resultsArray = []

      #filter by size if request includes ?width=value&height=value
      if params[:width] && params[:height]
        imagesArray.each do |image|
          m = image[:url].match(/id(.)(?<id>\d+)(.)(?<width>\d+)(.)(?<height>\d+)/)
          if m[:width] == params[:width] && m[:height] == params[:height]
            resultsArray.push(image)
          end
        end
      else
        resultsArray = imagesArray
      end

      #Handle pages if request includes ?page=value
      if params[:page]
        itemsPerPage = 20
        firstItem = (params[:page].to_i - 1)*itemsPerPage
        if resultsArray[firstItem]
          resultsArray = resultsArray[firstItem..firstItem+(itemsPerPage-1)]
        else
          resultsArray = []
        end
      end

      render json: {results: resultsArray.length, images: resultsArray}
    end
  end
end
