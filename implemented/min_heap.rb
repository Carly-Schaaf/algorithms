class MinHeap
    def initialize
        @array = [nil]
    end
    
    def size
        @array.length - 1
    end
    
    def insert(val)
        @array << val
        siftUp(@array.length - 1)
    end
    
    def parentNode(idx)
        return idx / 2
    end
    
    def leftChild(idx)
        return idx * 2
    end
    
    def rightChild(idx)
        return (idx * 2) + 1
    end
    
    def deleteMin
        return nil if @array.length <= 1
        return @array.pop if @array.length == 2
        
        max = @array[1]
        @array[1] = @array.pop

        self.siftDown(1)
        
        max
    end
    
    def min
        @array[1]
    end
    
    def siftUp(idx)
        return if idx == 1
        parent = parentNode(idx)
        
        if @array[parent] > @array[idx]
            @array[idx], @array[parent] = @array[parent], @array[idx]
            
            siftUp(parent)
        end
    end
    
    def siftDown(idx)
        return if idx == @array.length - 1
        
        leftChildIdx = self.leftChild(idx)
        leftChild = @array[self.leftChild(idx)]
        
        rightChildIdx = self.rightChild(idx)
        rightChild = @array[self.rightChild(idx)]
        
        leftChild = Float::INFINITY if (!leftChild)
        rightChild = Float::INFINITY if (!rightChild)
            
        if @array[idx] > leftChild || @array[idx] > rightChild
            
            smallerChildIdx = leftChild < rightChild ? leftChildIdx : rightChildIdx
            
            @array[idx], @array[smallerChildIdx] = @array[smallerChildIdx], @array[idx]
            
            siftDown(smallerChildIdx)
        end  
    end
end