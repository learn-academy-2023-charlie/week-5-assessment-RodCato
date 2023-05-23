# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

def beverages_containing_letter(array, letter)
   return array.select { |value| value.include?(letter)} 
end  

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water]
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

p beverages_containing_letter(beverages_array, filter_letter_o)
# Output: ['coffee', 'soda water]
p beverages_containing_letter(beverages_array, filter_letter_t)
# Output: ['tea', 'water', 'soda water']

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

def state_sorter(hash)  
 return hash.values.flatten.sort
end

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

p state_sorter(us_states)
# Output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize(model)
    @model = model   
    @wheels = 2
    @current_speed = 0
  end

  def bike_info
    "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
  end 

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# my_bike = Bike.new('Trek')
# p my_bike.bike_info
# Output: "The Trek bike has 2 wheels and is going 0 mph."

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0 

  def pedal_faster(speed)
    @current_speed += speed 
  end

  def brake(speed)
    @current_speed -= speed
    if @current_speed > 0   
      return @current_speed 
    else
      return 0
    end
  end
end
my_bike = Bike.new('Trek')
p my_bike.bike_info
# Output: "The Trek bike has 2 wheels and is going 0 mph."
p my_bike.pedal_faster(10)
# Output: 10
p my_bike.pedal_faster(18)
# Output: 28
p my_bike.brake(5)
# Output: 23
p my_bike.brake(25)
# Output: 0


