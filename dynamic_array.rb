require 'byebug'
class DArray
    def initialize
        @static = Array.new(5)
        @count = 0
        @start_idx = 0
    end

    def openings 
        @static.length - @count
    end

    def push(el)
        unless full?
            @static[@count] = el 
            @count += 1
            return true
        end
        false
    end

    def full?
        self.openings == 0
    end

    def empty?
        @openings == @static.length
    end

    def pop
        unless empty?
            el = @static[@count]
            @static[@count] = nil
            @count -= 1
            return el
        end
        false
    end

    def front 
        @static[@start_idx]
    end

    def rear 
        @static[@count - 1]
    end

    def shift
        unless empty?
            el = @static[@start_idx]
            @start_idx += 1
            @count -= 1
            return el
        end
        false
    end

    def unshift(el)
        if @start_idx > 0
            @count += 1
            @start_idx -= 1
            @static[@start_idx] = el
            return true
        end
        false
    end
end

d = DArray.new 
p d.push(1) # true
p d.push(2) # true
p d.push(3) # true
p d.push(4) # true
p d.push(5) # true
p d.push(6) # false
p d.rear # 5
p d.front # 1
p d.shift # 1
p d.unshift(0) # true
p d.front # 0
p d.rear # 5