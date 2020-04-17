require 'byebug'
# def solution(arr, parent_idx = 1)
#     return '' if arr.empty? ||  arr[parent_idx] == -1 || arr[parent_idx].nil?
#     arr.unshift(nil) if parent_idx == 1
    
#     left_sum = 0
#     right_sum = 0
    
#     left_result = solution(arr, parent_idx * 2)
#     unless left_result == ''
#         left_sum += left_result
#     end
    
#     right_result = solution(arr, (parent_idx * 2 + 1))
#     unless right_result == ''
#         right_sum += right_result
#     end
    
#     unless parent_idx == 1
#         return left_sum + right_sum + arr[parent_idx]
#     end
    
#     return '' if right_sum== left_sum
    
#     if right_sum > left_sum
#         "Right"
#     else
#         "Left"
#     end
# end

# p solution([3,6,2,9,-1,10])

def solution(angles)
    open_brackets = 0
    closed_brackets = 0
    angles.each_char do |char|
        if char == '<'
            open_brackets += 1
        else 
            if open_brackets > 0
                open_brackets -= 1 
            else
                closed_brackets += 1
            end
        end
    end

    
    until open_brackets == 0
        angles += '>'
        open_brackets -= 1
    end

    until closed_brackets == 0
        angles = '<' + angles
        closed_brackets -= 1
    end
    angles
end

puts solution('<<>>>>><<<>>') == '<<<<<>>>>><<<>>>'
