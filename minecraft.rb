require 'byebug'
require 'colorize'

class Cell
  attr_accessor :near_bombs, :explosive, :pos, :exposed, :board
  def initialize(pos, board)
    @explosive = false
    @pos = pos
    @exposed = false
    @near_bombs = nil
    @board = board
  end

  DIRS = [
    [1,1],
    [0,1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [1, 0]
  ]

  def nearest_neighbors
    neighbors = []
    self.near_bombs = 0
    DIRS.each do |dx, dy|
      pos = [self.pos[0] + dx, self.pos[1] + dy]
      if self.board.valid_pos?(pos)
        neighbor = @board[pos] 
        neighbors << neighbor
        self.near_bombs += 1 if neighbor.explosive
      end
    end 
    if self.near_bombs == 0
      self.near_bombs = 0
      neighbors.each do |neighbor|
        neighbor.expose
        neighbor.nearest_neighbors unless neighbor.near_bombs
      end
      # we want to find the nearest neighbors of all near neighbors
      # if we find a near neighbor with no self.near_bombs, we want to continue 
      # finding their nearest neighbors
    end
  end

  def expose 
    @exposed = true
  end

  def handle_click
    self.expose 
    if self.explosive
      self.board.game_over = true
    else
      self.nearest_neighbors
    end
  end
end

class Board
  attr_accessor :game_over
  def initialize
    @grid = Array.new(8) { Array.new(8, nil) }
    @game_over = false
    populate
  end

  def populate
    @grid.each_with_index do |row, x|
      row.each_with_index do |col, y|
        @grid[x][y] = Cell.new([x,y], self)
      end
    end
    10.times do 
      pos = [rand(8), rand(8)]
      self[pos].explosive = true
    end
  end

  def valid_pos?(pos)
    pos.all? {|i| i < @grid.length && i >= 0}
  end

  def [](pos)
    x, y = pos
    @grid[x][y]
  end

  def render 
    @grid.each_with_index do |row, x|
      row.each_with_index do |col, y|
        cell = self[[x,y]]
        if cell.exposed
          if cell.explosive
            print "\u{1F4A3}  ".colorize(background: :blue)
          elsif cell.near_bombs == 0
            print "   ".colorize(background: :blue)
          else
            print " #{cell.near_bombs} ".red.colorize(background: :blue)
          end
        else 
          print " X ".colorize(background: :blue)
        end
      end
      puts
    end
  end

  def play
    until self.game_over
      self.render
      puts "Please enter a position, e.g. 1,1"
      input = gets.chomp.split(",").map {|el| el.to_i}
      raise InvalidPosition unless self.valid_pos?(input)
      system("clear")
      cell = self[input]
      cell.handle_click
    end
    self.render
    puts "Aw shucks. Game over."
  rescue InvalidPosition
    puts "That position is not on the board."
    retry
  end
  
  class InvalidPosition < ArgumentError
  end
end

b = Board.new
b.play