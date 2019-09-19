require 'byebug'
class RingBuffer
    attr_accessor :openings, :q
=begin
    Initialize your data structure here. Set the size of the queue to be k.
    :type k: Integer
=end
    def initialize(k)
        @q = Array.new(k) {nil}
        @size = k
        @openings = k
        @head = nil
        @tail = 0
    end


=begin
    Insert an element into the circular queue. Return true if the operation is successful.
    :type value: Integer
    :rtype: Boolean
=end
    def en_queue(value)
        if self.openings > 0
            self.openings -= 1
            @head = @head == nil ? 0 : (@head + 1) % @size
            @q[@head] = value 
            true
        else
            false
        end
    end


=begin
    Delete an element from the circular queue. Return true if the operation is successful.
    :rtype: Boolean
=end
    def de_queue
        unless is_empty
            @q[@tail] = nil
            @tail = (@tail + 1) % @size
            @openings += 1
            true
        else
            false
        end
    end


=begin
    Get the front item from the queue.
    :rtype: Integer
=end
    def front
        return -1 if self.is_empty
        @q[@tail]
    end


=begin
    Get the last item from the queue.
    :rtype: Integer
=end
    def rear
        return -1 if self.is_empty
        @q[@head]
    end


=begin
    Checks whether the circular queue is empty or not.
    :rtype: Boolean
=end
    def is_empty
        self.openings == @size
    end


=begin
    Checks whether the circular queue is full or not.
    :rtype: Boolean
=end
    def is_full
        self.openings == 0
    end


end

# Your MyCircularQueue object will be instantiated and called as such:
q = RingBuffer.new(3); # set the size to be 3
p q.en_queue(6);  # return true
p q.rear  # return 6
p q.rear;  # return 6
p q.de_queue;  # true
p q.en_queue(5);  # return true
p q.rear; #5
p q.de_queue #true
p q.front # return -1
p q.de_queue;  # return false
p q.de_queue;  # return false
p q.de_queue;  # return false

# p q.en_queue(1);  # return true
# p q.en_queue(2);  # return true
# p q.en_queue(3);  # return true
# p q.en_queue(4);  # return false, the _queue is full
# p q.rear();  # return 3
# p q.is_full();  # return true
# p q.de_queue();  # return true
# p q.en_queue(4);  # return true
# p q.rear() # 4