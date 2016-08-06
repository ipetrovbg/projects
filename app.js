jQuery(function($) {
	var list = $('#project-list li'),
		listLength = list.length,
		windowWith = $( window ).width();

	list.each(function(v, k){
		if(windowWith >= 1300){
			k.style.width = '24%';
		}else if(windowWith >= 612){
			k.style.width = '48%';
		}else if(windowWith >= 341){
			k.style.width = '100%';
		}
		k.style.height = '300px';
	});
	$(window).resize(function(){
		var windowWith = $( window ).width();
		closeAllOpenedProjects();
		
		list.each(function(v, k){
			if(windowWith >= 1300){
				k.style.width = '24%';
			}else if(windowWith >= 612){
				k.style.width = '48%';
			}else if(windowWith >= 341){
				k.style.width = '100%';
			}
			k.style.height = '300px';
		});
	});

	$('html').on('click', '#project-list li', function(){
		var project = $(this);
		var windowWith = $( window ).width();

		if(windowWith < 612){
			loadProject(project, 1);
		}else if(windowWith > 612 && windowWith < 1300){
			loadProject(project, 2);
		}else if( windowWith >= 1300){			
			loadProject(project, 4);
		}					
	});















	function closeAllOpenedProjects(){
		$('#project-list li.created').stop().animate({
			opacity: '0',
			height: '0'
		}, 300, function(){
			$(this).remove();
			$('#project-list li.selected').removeClass('selected');
		});
	}



	function loadProject(project, state){

		switch(state){
			case 1:

				if(!project.hasClass('selected')){
								if(!$(project).hasClass('created')){			
									if ($(".selected")[0]){
										$(".selected").removeClass('selected');
									}
									project.addClass('selected');
								if ($(".created")[0]){
									$('#project-list li.created').stop().animate({
										opacity: '0',
										height: '0'
									}, 300, function(){
										$(this).remove();
										var createProject = document.createElement("LI");							

										$(project).after(createProject);

										$(createProject).css({opacity: '0', height: '0'});
										$(createProject).stop().animate({					
											width: '99%'					
											// height: '200px'
										}, 100, function(){
											$(this).stop().animate({
												height: '500px',
												opacity: '1'
											}, 700);

											$(createProject).text(project.text() + " Hello from created project");	
											$(createProject).addClass('project');
											$(createProject).addClass('created');

											$('html, body').animate({
										        scrollTop: $(".created").offset().top - 70
										    }, 700);
											
										});
									});	
								}else{
									var createProject = document.createElement("LI");							
									$(project).after(createProject);
									
									$(createProject).css({opacity: '0', height: '0'});
									$(createProject).stop().animate({					
										width: '99%'					
										// height: '200px'
									}, 100, function(){
										$(this).stop().animate({
											height: '500px',
											opacity: '1'
										}, 700);
										$(createProject).text(project.text() + " Hello from created project");	
										$(createProject).addClass('project');
										$(createProject).addClass('created');
										$('html, body').animate({
										        scrollTop: $(".created").offset().top - 70
										    }, 700);
									});
								}			
							}
						}else{
							project.removeClass('selected');
							$('#project-list li.created').stop().animate({
									opacity: '0',
									height: '0'
								}, 300, function(){
									$(this).remove();
								});
						}

				break;
			case 2:
				if(!project.hasClass('selected')){
					if(!$(project).hasClass('created')){			
						if ($(".selected")[0]){
							$(".selected").removeClass('selected');
						}
						project.addClass('selected');
					if ($(".created")[0]){
						$('#project-list li.created').stop().animate({
							opacity: '0',
							height: '0'
						}, 300, function(){
							$(this).remove();
							var createProject = document.createElement("LI");							

							if((project.index() + 2) >= listLength){
								$('#project-list li:nth-child('+ (listLength) +')').after(createProject);								
							}
							if(project.index() % 2 > 0){
								$('#project-list li:nth-child('+ (project.index() + 1) +')').after(createProject);
								
							}else{
								$('#project-list li:nth-child('+ (project.index() + 2) +')').after(createProject);
							}
							
							$(createProject).css({opacity: '0', height: '0'});
							$(createProject).stop().animate({					
								width: '99%'					
								// height: '200px'
							}, 100, function(){
								$(this).stop().animate({
									height: '500px',
									opacity: '1'
								}, 700);

								$(createProject).text(project.text() + " Hello from created project");	
								$(createProject).addClass('project');
								$(createProject).addClass('created');

								$('html, body').animate({
							        scrollTop: $(".created").offset().top - 70
							    }, 700);
								
							});
						});	
					}else{
						var createProject = document.createElement("LI");							
						
						if((project.index() + 2) >= listLength){
								$('#project-list li:nth-child('+ (listLength) +')').after(createProject);								
							}
							if(project.index() % 2 > 0){
								$('#project-list li:nth-child('+ (project.index() + 1) +')').after(createProject);
							}else{
								
								$('#project-list li:nth-child('+ (project.index() + 2) +')').after(createProject);
							}
						
						$(createProject).css({opacity: '0', height: '0'});
						$(createProject).stop().animate({					
							width: '99%'					
							// height: '200px'
						}, 100, function(){
							$(this).stop().animate({
								height: '500px',
								opacity: '1'
							}, 700);
							$(createProject).text(project.text() + " Hello from created project");	
							$(createProject).addClass('project');
							$(createProject).addClass('created');
							$('html, body').animate({
							        scrollTop: $(".created").offset().top - 70
							    }, 700);
						});
					}			
			}
		}else{
			project.removeClass('selected');
			$('#project-list li.created').stop().animate({
					opacity: '0',
					height: '0'
				}, 300, function(){
					$(this).remove();
				});
		}
				break;
			case 4:
				if(!project.hasClass('selected')){
								if(!$(project).hasClass('created')){			
									if ($(".selected")[0]){
										$(".selected").removeClass('selected');
									}
									project.addClass('selected');
								if ($(".created")[0]){
									$('#project-list li.created').stop().animate({
										opacity: '0',
										height: '0'
									}, 300, function(){
										$(this).remove();
										var createProject = document.createElement("LI");							

										if((project.index() + 4) >= listLength){
											$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											
										}
										switch(project.index() % 4){
											case 1:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ (project.index() + 3) +')').after(createProject);
											}
												break;
											case 2:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ (project.index() + 2) +')').after(createProject);
											}
												break;
											case 3:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ (project.index() + 1) +')').after(createProject);
											}
												break;
											case 4:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ project.index() +')').after(createProject);
											}
												break;
											default:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ (project.index() + 4) +')').after(createProject);
											}						
												break;
										}
										$(createProject).css({opacity: '0', height: '0'});
										$(createProject).stop().animate({					
											width: '99%'					
											// height: '200px'
										}, 100, function(){
											$(this).stop().animate({
												height: '500px',
												opacity: '1'
											}, 700);

											$(createProject).text(project.text() + " Hello from created project");	
											$(createProject).addClass('project');
											$(createProject).addClass('created');

											$('html, body').animate({
										        scrollTop: $(".created").offset().top - 70
										    }, 700);
											
										});
									});	
								}else{
									var createProject = document.createElement("LI");							
									
									if((project.index() + 4) >= listLength){
										$('#project-list li:nth-child('+ (listLength) +')').after(createProject);							
									}

									switch(project.index() % 4){
											case 1:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ (project.index() + 3) +')').after(createProject);
											}
												break;
											case 2:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ (project.index() + 2) +')').after(createProject);
											}
												break;
											case 3:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ (project.index() + 1) +')').after(createProject);
											}
												break;
											case 4:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ project.index() +')').after(createProject);
											}
												break;
											default:
											if(project.index() > listLength){
												$('#project-list li:nth-child('+ (listLength) +')').after(createProject);
											}else{
												$('#project-list li:nth-child('+ (project.index() + 4) +')').after(createProject);
											}						
												break;
										}
									
									$(createProject).css({opacity: '0', height: '0'});
									$(createProject).stop().animate({					
										width: '99%'					
										// height: '200px'
									}, 100, function(){
										$(this).stop().animate({
											height: '500px',
											opacity: '1'
										}, 700);
										$(createProject).text(project.text() + " Hello from created project");	
										$(createProject).addClass('project');
										$(createProject).addClass('created');
										$('html, body').animate({
										        scrollTop: $(".created").offset().top - 70
										    }, 700);
									});
								}			
							}
						}else{
							project.removeClass('selected');
							$('#project-list li.created').stop().animate({
									opacity: '0',
									height: '0'
								}, 300, function(){
									$(this).remove();
								});
						}

				break;
			default:
				break;
		}		
	}
});