json.extract! business, :id, :name, :address, :phone_number,
:cuisine, :website, :image, :rating, :review_count


json.image asset_path(business.image.url)
