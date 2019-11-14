require 'byebug'
class DArray

    def initialize
        @static = Array.new(5)
        @count = 0
        @end_idx = 0
        @start_idx = 0
    end

    def push(el)
        resize! if full?
        unless full?
            @end_idx += 1
            @static[@end_idx] = el 
            @count += 1
            return self.inspect
        end 
        return false
    end

    def pop
        unless empty?
            el = @static[@end_idx]
            @static[@end_idx] = nil
            @end_idx -= 1
            @count -= 1
            return self.inspect
        end
        false
    end

    def unshift(el)
        resize! if full?
        unless full?
            @static[@start_idx] = el
            @start_idx -= 1
            @count += 1
            return self.inspect
        end
        return false
    end

    def shift
        unless empty?
            @start_idx += 1
            el = @static[@start_idx]
            @static[@start_idx] = nil
            @count -= 1
            return self.inspect
        end
        false
    end

     def front 
        return nil if empty?
        @static[@start_idx + 1]
    end

    def rear 
        return nil if empty?
        @static[@end_idx]
    end

    def inspect
        result = []
        i = @start_idx + 1
        until i == @end_idx + 1
            result << @static[i]
            i += 1
        end
        result
    end

    protected 

    def resize!
        new_array = Array.new(@static.length * 2)
        old_start = @start_idx
        new_start = 0
        until old_start == @end_idx + 1
            new_array[new_start] = @static[old_start]
            new_start += 1
            old_start += 1
        end
        @static = new_array
        @end_idx = @end_idx + (@start_idx).abs
        @start_idx = 0
    end

    def full?
        @count == @static.length
    end

    def empty?
        @count == 0
    end

end

d = DArray.new 
p d.unshift(1) # true
p d.unshift(2) # true
p d.unshift(3) # true
p d.unshift(4) # true
p d.unshift(5) # true
p d.unshift(6) # true
p d # [6,5,4,3,2,1]