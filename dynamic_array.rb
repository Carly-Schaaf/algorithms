require 'byebug'
class DArray
    def initialize
        @static = Array.new(5)
        @count = 0
        @end_idx = 0
        @start_idx = 0
    end

    def openings 
        @static.length - @count
    end

    def push(el)
        back_resize! if full?
        @static[@end_idx] = el 
        @end_idx += 1
        @count += 1
        return true
    end

    def pop
        unless empty?
            @end_idx -= 1
            el = @static[@end_idx]
            @static[@end_idx] = nil
            @count -= 1
            return el
        end
        false
    end

    def back_resize!
        @static += Array.new(@static.length)
    end

    def front_resize!
        @start_idx += @static.length
        @end_idx += @static.length
        @static = Array.new(@static.length) + @static
    end

    def full?
        self.openings == 0
    end

    def empty?
        @openings == @static.length
    end

    def front 
        return "empty" if empty?
        @static[@start_idx]
    end

    def rear 
        return "empty" if empty?
        @static[@end_idx - 1]
    end

    def unshift(el)
        debugger
        front_resize! if full?  
        @static[@start_idx] = el
        @end_idx += 1
        @count += 1
        return true
    end

    def shift
        unless empty?
            @start_idx += 1
            @end_idx -= 1
            el = @static[@start_idx]
            @static[@start_idx] = nil
            @count -= 1
            return el
        end
        false
    end

end

d = DArray.new 
p d.unshift(1) # true
p d.unshift(2) # true
p d.unshift(3) # true
p d.unshift(4) # true
p d.unshift(5) # true
p d.unshift(6) # true
p d.rear # 1
p d.front # 6
p d.unshift(0) # true
p d.front # 0
p d.rear # 6