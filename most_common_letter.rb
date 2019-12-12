require 'byebug'
require 'set'

class Heap
    attr_accessor :array
    def initialize(hash)
        @array = [nil]
        @hash = hash
        @set = Set.new
    end

    def insert(value)
        return if @set.include?(value)
        @set.add(value)
        @array.push(value)
        siftUp(self.length)
    end

    def parent(idx)
        idx / 2
    end

    def leftChild(idx)
        idx * 2
    end

    def rightChild(idx)
        idx * 2 + 1
    end

    def length 
        @array.length - 1
    end

    def siftUp(idx)
        # [1,2,3,4,0]
        return if idx <= 1

        parent_idx = parent(idx) #2
        parent = @hash[@array[parent_idx]] #3

        left_child_idx = leftChild(parent_idx) #4
        left_child = @hash[@array[left_child_idx]] #4

        right_child_idx = rightChild(parent_idx) #5
        right_child = @hash[@array[right_child_idx]]#0

        left_child ||= Float::INFINITY
        right_child ||= Float::INFINITY

        if (left_child < parent) || (right_child < parent)
            if left_child < right_child
                parent = @array[parent_idx]

                @array[parent_idx] = @array[left_child_idx]
                @array[left_child_idx] = parent
            else
                parent = @array[parent_idx]

                @array[parent_idx] = @array[right_child_idx]
                @array[right_child_idx] = parent
            end

            siftUp(parent_idx)
        end
    end

    def siftDown(idx)
        return if idx == self.length
        
        current = @hash[@array[idx]]

        left_child_idx = leftChild(idx)
        left_child = @hash[@array[left_child_idx]]

        right_child_idx = rightChild(idx)
        right_child = @hash[@array[right_child_idx]]

        left_child ||= Float::INFINITY
        right_child ||= Float::INFINITY
        # debugger
        if current > left_child || current > right_child
            if left_child < right_child
                parent = @array[idx]
                @array[idx] = @array[left_child_idx]
                @array[left_child_idx] = parent

                siftDown(left_child_idx)
            else
                parent = @array[idx]

                @array[idx] = @array[right_child_idx]
                @array[right_child_idx] = parent

                siftDown(right_child_idx)
            end
        end

    
    end

    def deleteMin
        min = @array[1]
        last = @array.pop
        if self.length > 0
            @array[1] = last
            siftDown(1)
        end

        @set.delete(min)
        min
    end

    def min 
        @array[1]
    end
end

# h = Heap.new 
# h.insert(1)
# h.insert(2)
# h.insert(3)
# h.insert(0)
# h.insert(5)
# h.insert(8)
# h.insert(6)
# p h.array
# h.deleteMin
# h.deleteMin
# p h.array

def five_most_common_letters(string)
    # have hash keep track of num appearances
    # have heap keep track of most common letter
    hash = Hash.new
    heap = Heap.new(hash)

    string.each_char do |letter|
        if hash[letter] 
            hash[letter] += 1
        else
            hash[letter] = 1
        end
        
        if heap.length < 5
            heap.insert(letter)
        elsif hash[letter] > hash[heap.min]
            old_value = heap.deleteMin
            heap.insert(letter)
        end
    end

    result = []
    while heap.length > 0
        result << heap.deleteMin
    end

    result.reverse.map {|char| "#{char}: #{hash[char]}"}
end

p five_most_common_letters("laaaaaasssskkkjdfie")