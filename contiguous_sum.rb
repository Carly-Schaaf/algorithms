require 'byebug'

def max_sub_array(nums)
   max = nums.shift
   current_sum = max
    
    nums.each do |num|
        if current_sum <= 0
            current_sum = 0
        end

        current_sum += num
        
        if current_sum > max 
            max = current_sum
        end
    end

    max
end

p max_sub_array([-2,1])