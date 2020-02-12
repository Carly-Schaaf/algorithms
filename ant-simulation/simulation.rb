class LangtonAnt

    attr_reader :board
    
    def initialize(num_turns)
        @num_turns = num_turns
        @board = Array.new(11) { Array.new(11, :white) }
        @ant_pos = [5, 5]
        @orientation = 0
        @forward_directions = {
            0 => [-1, 0],
            90 => [0, 1],
            180 => [1, 0],
            270 => [0, -1]
        }
    end

    def run
        @num_turns.times do 
            current_square = @board[@ant_pos[0]][@ant_pos[1]]
            if current_square == :white
                @orientation = (@orientation + 90) % 360
                @board[@ant_pos[0]][@ant_pos[1]] = :black
            else
                @orientation = (@orientation - 90) 
                @orientation = 270 if @orientation < 0
                @board[@ant_pos[0]][@ant_pos[1]] = :white
            end
            forward_direction = @forward_directions[@orientation]
            @ant_pos = [@ant_pos[0] + forward_direction[0], @ant_pos[1] + forward_direction[1]]
        end
    end

    def display
        @board.each do |row|
            row.each do |square|
                print square
            end
            puts
        end
    end
end

l = LangtonAnt.new(100)
l.run 
l.display