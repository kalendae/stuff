asset :

  :address_1 => :string,
  :address_2 => :string,
  :city => :string,
  :state => :string,
  :postal_code => :string,
  :app => :string,
  :asset_type => :string,
  :asset_id => :string,
  :domain => :string

inspection :

  :name => :string,
  :note => :text,


  space :

  :space_type => :string,
  :note => :text,
  :nickname => :string,
  :condition => :integer,
  :area_type => :string,
  :floor => :string,
  :unit => :string,


  item :

  :nickname => :string,
  :condition => :integer,
  :note => :text,
  :item_type => :string


meter :

  :meter_type => :string,
  :note => :text,
  :meter_id => :string,
  :nickname => :string,
  :serial => :string,
  :location => :string,
  :reading => :float,
  :supplier => :string,
  :last_checked => :date,

certificates :

  :certificate_type => :string,
  :note => :text,
  :nickname => :string,
  :certificate_number => :string,
  :issued_on => :date,
  :organisation => :string,
  :engineer => :string,
  :renewal_period => :date,
