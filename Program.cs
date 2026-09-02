var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles(); // makes a request for / return index.html
app.UseStaticFiles(); // allows files in wwwroot to be reached by browsers
app.Run();
