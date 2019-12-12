require 'byebug'
require 'set'

require 'set'

def length_of_longest_substring(s)
    max = s[0] ? 1 : 0
    set = Set.new
    
    i = 0
    j = 1
    
    set.add(s[i])
    while (j < s.length)
        if !set.include?(s[j])
            set.add(s[j])
            j += 1
            max = [max, j - i].max
        else
            set.delete(s[i])
            i += 1
        end
    end
    
    max
end

p length_of_longest_substring("au")