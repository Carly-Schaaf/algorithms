require 'byebug'
class Cell
  attr_accessor :bombs, :explosive, :pos, :exposed
  def initialize(explosive, pos)
    @explosive = explosive
    @pos = pos
    @exposed = false
    @bombs = 0
  end

  DIRS = [
    [1,1],
    [0,1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [-1, -1],
    [-1, 1]
  ]

  def nearest_neighbors
    num_bombs = 0
    DIRS.each do |dx, dy|
      neighbor = [self.pos[0] + dx, self.pos[1] + dy]
      num_bombs += 1 if neighbor.explosive
    end 
    self.bombs = num_bombs
    if !self.bombs == 0
      # we want to find the nearest neighbors of all near neighbors
      # if we find a near neighbor with no self.bombs, we want to continue 
      # finding their nearest neighbors
    end
  end
end

class Board
  def initialize
    bools = [true, false]
    @grid = Array.new(8) { Array.new(8, nil) }
    populate
  end

  def populate
    bools = [true, false]
    @grid.each_with_index do |row, x|
      row.each_with_index do |col, y|
        @grid[x][y] = Cell.new(bools[rand(2)], [x,y])
      end
    end
  end
end

b = Board.new