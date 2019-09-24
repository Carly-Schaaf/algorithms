class MyHashSet
    # should mod by num buckets to get the bucket
    # have amortized inclusion by resizing the array

=begin
    Initialize your data structure here.
=end
    def initialize()
        @set = Array.new(5)
        @size = 5
        @count = 0
    end


=begin
    :type key: Integer
    :rtype: Void
=end
    def add(key)
        @count += 1
        resize if @size == @count
        @set[key.hash % @size] << key
    end


=begin
    :type key: Integer
    :rtype: Void
=end
    def remove(key)
        @count -= 1
        bucket = @set[key.hash % @size]
        bucket.delete(key)
    end

    def resize 
        elements = @set.flatten
        @set = Array.new(@size * 2)
        @count = 0
        @size = @size * 2
        elements.each do |element|
            self.add(element)
        end
    end
=begin
    Returns true if this set contains the specified element
    :type key: Integer
    :rtype: Boolean
=end
    def contains(key)
        bucket = @set[key.hash % @size]
        bucket.include?(key)
    end


end

# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet.new
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)