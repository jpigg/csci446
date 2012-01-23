class Player
  def play_turn(warrior)
	if warrior.feel.empty?
		#if @health > warrior.health : do not rest
		if (warrior.health < 20) and (@health <= warrior.health)
			warrior.rest!
			@health = warrior.health
		else
			warrior.walk!
		end
	else
		warrior.attack!
	end
	@health = warrior.health
  end
end
