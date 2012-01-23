class Player
  def play_turn(warrior)
	if warrior.feel.wall?
		warrior.pivot!	
	elsif warrior.feel.empty?
		#if @health > warrior.health : do not rest
		if (@attack == false)
			if(@health > warrior.health)
				warrior.walk! :backward
				#print warrior.health
				#print @health
			else
				warrior.rest!
			end
			@health = warrior.health
		else
			warrior.walk!
		end
	elsif warrior.feel.captive?
		warrior.rescue!
	else
		warrior.attack!
	@health = warrior.health
	end
	@health = warrior.health
	if(warrior.health < 10)
		@attack = false
	end
	if(warrior.health == 20)
		@attack = true
	end
  end
end
