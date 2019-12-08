# @param {String} s
# @return {String}
def longest_palindrome(s)
    max = s[0]

    s.each_char.with_index do |el, i|

        # for odd substrings - when middle is el
        start_idx = i - 1
        last_idx = i + 1
        result_odd = s.grow_substring(max, start_idx, last_idx)

        # for even substrings - when middle is between el and el.next
        start_idx = i 
        last_idx = i + 1
        result_even = s.grow_substring(max, start_idx, last_idx)

        max = [max, result_even, result_odd].max { |a, b| a.length <=> b.length }
    end

    # if max is null due to indexing into it on line 4, return ""
    return max || ""
end

class String 
    def grow_substring(max, start_idx, last_idx)
        offset = 1

        until (start_idx < 0) || (last_idx >= self.length)
            sub = self[start_idx..last_idx]
            break unless ends_match?(sub)

            if sub.length > max.length
                max = sub
            end

            offset += 1
            start_idx -= 1
            last_idx += 1
        end

        return max
    end
end

def ends_match?(sub)
    sub[0] == sub[-1]
end

puts longest_palindrome("aabaabc") == "aabaa"
puts longest_palindrome("aaaaaa") == "aaaaaa"
puts longest_palindrome("xx") == "xx"
puts longest_palindrome("y") == "y"
# check the spaces cuz otherwise you'll never catch even palidromes