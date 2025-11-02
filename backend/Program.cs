namespace backend
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

			var builder = WebApplication.CreateBuilder(args);

			// Define origins based on environment
			string[] allowedOrigins = builder.Environment.IsDevelopment()
				? new[] { "http://localhost:3000" } // local Next.js dev
				: new[]
				{
					"https://job-tracker-navy-theta.vercel.app",
					"https://job-tracker-otso-saarinens-projects.vercel.app"
				};

			// CORS setup
			builder.Services.AddCors(options =>
			{
				options.AddPolicy(name: MyAllowSpecificOrigins, policy =>
				{
					policy.WithOrigins(allowedOrigins)
						  .WithHeaders("Content-Type", "Authorization")
						  .WithMethods("GET", "POST", "PUT", "DELETE");
				});
			});

			builder.Services.AddControllers();
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			var app = builder.Build();

			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseHttpsRedirection();
			app.UseCors(MyAllowSpecificOrigins);
			app.UseAuthorization();
			app.MapControllers();
			app.Run();
		}
	}
}
