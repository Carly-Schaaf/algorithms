require 'byebug'

class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# def merge_two_lists(l1, l2)
#     node1 = l1
#     node2 = l2

#     result = nil
#     prev = nil

#     until node1.nil? || node2.nil?
#         smallest = [node1, node2].min {|n1, n2| n1.val <=> n2.val }
#         result = smallest if result.nil? 

#         if smallest == node1 
#             node1 = node1.next 
#         else 
#             node2 = node2.next 
#         end

#         prev.next = smallest if prev 
#         prev = smallest
#     end

#     if prev 
#         if node1.nil? 
#             prev.next = node2
#         else
#             prev.next = node1
#         end
#     else
#         result = node1 || node2
#     end 

#     result 
# end

def merge_two_lists(l1, l2)
    result = l1 || l2 

    if l1 && l2 
        first = [l1, l2].min {|n1, n2| n1.val <=> n2.val}
        result = first 

        if first == l1 
            first.next = merge_two_lists(l1.next, l2)
        else
            first.next = merge_two_lists(l1, l2.next)
        end
    end

    result
end

# [5]
# [1,2,4]

l1 = ListNode.new(5)
l2 = ListNode.new(1)
l2.next = ListNode.new(2)
l2.next.next = ListNode.new(4)
# l1 = nil
# l2 = nil


node = merge_two_lists(l1, l2)
while node
    puts node.val 
    node = node.next
end