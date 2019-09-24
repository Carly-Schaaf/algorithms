require 'byebug'
class MyHashMap

=begin
    Initialize your data structure here.
=end
    def initialize
        @map = Array.new(5) {[]}
        @size = 5
        @count = 0
    end


=begin
    value will always be non-negative.
    :type key: Integer
    :type value: Integer
    :rtype: Void
=end
    def put(key, value)
        remove(key) unless get(key) == -1
        @count += 1
        resize! if @count == @size
        bucket = @map[key.hash % @size]
        bucket << [key, value]
    end

    def resize!
        @count = 0
        elements = @map.flatten(1)
        @size = @size * 2
        @map = Array.new(@size) {[]}

        elements.each do |k, v|
            self.put(k, v)
        end
    end
=begin
    Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
    :type key: Integer
    :rtype: Integer
=end
    def get(key)
        bucket = @map[key.hash % @size]
        pair = bucket.find {|k, v| k == key}
        if pair 
            pair[1]
        else
            -1
        end
    end


=begin
    Removes the mapping of the specified value key if this map contains a mapping for the key
    :type key: Integer
    :rtype: Void
=end
    def remove(key)
        unless get(key) == -1
            @count -= 1
            bucket = @map[key.hash % @size]
            bucket.reject! {|k, v| k == key}
        end
    end


end

h = MyHashMap.new;
h.remove(14)
h.get(4)
h.put(7, 3)
h.put(11, 1)
h.put(12, 1)
h.get(7)
h.put(1, 19)
h.put(0, 3)
h.put(1, 8)
h.put(2, 6)
