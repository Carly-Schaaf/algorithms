# @param {Integer[]} nums
# @return {Integer[][]}
require 'byebug'

def three_sum(nums)
    nums = nums.sort
    result = []
    debugger
    nums.each_with_index do |num, i|
        break if (nums.length - i <= 2)
        l = i + 1
        r = nums.length - 1
        sum = nil 
        
        until (l >= r) || (r <= l)
            sum = num + nums[l] + nums[r]
            if sum < 0 
                l += 1
            elsif sum > 0
                r -= 1
            else
                result << [num, nums[l], nums[r]]
                sum = nil 
                l += 1
                r -= 1
            end
        end
    end
    
    result.uniq
end
# p three_sum([2, -2, 0])
# p three_sum([-1,0,1,2,-1,-4])
# p three_sum([-2,0,1,1,2])
p three_sum([-1,0,1,2,-1,-4])