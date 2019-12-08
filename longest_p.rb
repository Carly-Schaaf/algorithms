# @param {String} s
# @return {String}
def longest_palindrome(s)
    return "" if s.length == 0
    max_length = 1
    max = s[0]
    
    s.each_char.with_index do |_, i|
        next if i == s.length - 1

        two_letter_sub = s[i] + s[i + 1]
        if is_palidrome?(two_letter_sub)
            max_length = 2
            max = two_letter_sub
        end

        offset = 1
        start = i - offset
        last = i + offset 

        next if start < 0

        sub = s[start..i + offset]
        while is_palidrome?(sub)
            max_length = sub.length 
            max = sub 

            offset += 1
            start = i - offset
            last = i + offset 

            break if start < 0 || last > s.length - 1

            sub = s[start..i + last]
        end
    end
    
    max
end

def is_palidrome?(sub)
    sub[0] == sub[-1]
end

puts longest_palindrome("aaaa")