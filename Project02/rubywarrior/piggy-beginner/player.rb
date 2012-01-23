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
	elsif warrior.feel.captive?
		warrior.rescue!
	else
		warrior.attack!
	end
	@health = warrior.health
  end
end
